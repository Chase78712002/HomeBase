# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding User..."

User.create(first_name: 'James', last_name: 'Harden', email: 'jharden@mail.com', password:'123', user_type_id: 1)

puts "Seeding Project..."
Project.create(name: 'Mill House')

puts "Seeding Transaction..."
Transaction.create(description: 'Painting walls', amount: 200)

puts "Seeding UserTypes..."
UserType.create(description:'builder')
