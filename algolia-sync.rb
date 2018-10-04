#!/usr/bin/env ruby

require 'json'
require 'algoliasearch'
require "net/http"

puts "running algolia search sync..."
url = 'https://indianstates.netlify.com/algolia.json'
uri = URI(url)
response = Net::HTTP.get(uri)

old_algolia = JSON.parse(response)
current_algolia = JSON.parse(File.read('_site/algolia.json'))

current_hash = current_algolia.map{ |x| [x['objectID'], x] }.to_h
old_hash = old_algolia.map{ |x| [x['objectID'], x] }.to_h

update_records = []
current_hash.each do |id, record|
  if current_hash[id] != old_hash[id]
    puts "ALGOLIA UPDATE: \"#{record['title']}\""
    update_records.push(record)
  end
end

delete_records = []
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
