# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

images = []
1.upto(4444).with_index do |index|
  images << {
    identifier: index,
    url: "https://loremflickr.com/320/240?random=#{index}",
    ipfs: "ipfs://#{index}.png"
  }
end
Image.upsert_all(images)
puts "Finished adding images."