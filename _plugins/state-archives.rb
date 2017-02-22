require "jekyll"

module Jekyll

  class ArchivePage < Page
    def initialize(site, base, dir, filename, state, sector)
      @site = site
      @base = base
      @dir = dir
      @name = filename+'.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'state-sector-archive.html')
      self.data['title'] = filename
      self.data['state'] = state
      self.data['sector'] = sector

    end
  end

  class ArchivePageGenerator < Jekyll::Generator
    safe true

    def generate(site)
      if site.layouts.key? 'state-sector-archive'
        dir = 'states'
        # Loop through states
        site.collections['states'].docs.each do |state|
          # Loop through categories and create a new archive page for each state-sector combo
          site.collections['sectors'].docs.each do |sector|
            filename = state.data["slug"] + "-" + sector.data["slug"]
            site.pages << ArchivePage.new(site, site.source, File.join(dir), filename, state.data["title"], sector.data["title"])
          end

          # Create an all archive
          filename = state.data["slug"] + "-all"
          site.pages << ArchivePage.new(site, site.source, File.join(dir), filename, state.data["title"], "all")

        end
      end
    end
  end

end