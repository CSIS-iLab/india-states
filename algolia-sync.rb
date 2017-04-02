#!/usr/bin/env ruby

require 'json'
require 'algoliasearch'

# Copy the algolia from prior commit to a tmp file for comparison
`git show $(git rev-parse HEAD~1):algolia.json > old-algolia.json`

current_algolia = JSON.parse(File.read('algolia.json'))
old_algolia = JSON.parse(File.read('old-algolia.json'))

current_hash = current_algolia.map{ |x| [x['objectID'], x] }.to_h
old_hash = old_algolia.map{ |x| [x['objectID'], x] }.to_h

update_records = []
current_hash.each do |id, record|
  if current_hash[id] != old_hash[id]
    puts "ALGOLIA UPDATE: \"#{record['title']}\""
    update_records.push(record)
  end
end

old_hash.each do |id, record|
  if !current_hash.include?(id)
    puts "ALGOLIA DELETE: \"#{record['title']}\""
    delete_records.push(id)
  end
end

Algolia.init :application_id => ENV['ALGOLIA_APP_KEY'], :api_key => ENV['ALGOLIA_API_KEY']
index = Algolia::Index.new(ENV['ALGOLIA_INDEX'])
index.add_objects(update_records)
index.delete_objects(delete_records)
