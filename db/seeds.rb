# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Creating PROJECT Seed data ...'

project1 = Project.create(
  name: 'Project 1 - Kolumbeya',
  start_date: Time.now,
  end_date: Time.now + 30 #days
)

project2 = Project.create(
  name: 'Project 2 - Toronto',
  start_date: Time.now,
  end_date: Time.now + 60
)

project3 = Project.create(
  name: 'Project 3 - Mumbai',
  start_date: Time.now,
  end_date: Time.now + 90
)
puts "--Done Seeding Projects--"
puts 'Creating USER Seed data ...'

user1 = User.create(
  first_name: 'Bob',
  last_name: 'The Builder',
  email: 'BobbyBuilds@gmail.com',
  password: '1234'
)

user2 = User.create(
  first_name: 'Sally',
  last_name: 'Silly',
  email: 'SillySally@hotmail.com',
  password: 'qwer'
)

user3 = User.create(
  first_name: 'Third',
  last_name: 'User_Person',
  email: 'email@hotmail.com',
  password: 'asdf123'
)

puts "--Done Seeding Users--"
puts 'Creating DOCUMENT Seed data ...'

document1 = Document.create(
  title: 'Big Contract',
  category_type: 'Contract',
  path: 'user/dmar/documents'
)

document2 = Document.create(
  title: 'Floor Plan Option #2',
  category_type: 'Floor Plan',
  path: 'user/dmar/documents/floorplans'
)

document3 = Document.create(
  title: 'Window Options',
  category_type: 'Supplementary',
  path: 'user/dmar/documents/windows'
)

puts "--Done Seeding Documents--"
puts 'Creating CHANGE_ORDER Seed data ...'

co1 = ChangeOrder.create(
  description: 'Lorem Ipsum a bunch',
  cost: 100,
  path: 'user/dmar/change_orders/co1'
)

co2 = ChangeOrder.create(
  description: 'Change to bathroom paint',
  cost: 2100,
  approval: true,
  path: 'user/dmar/change_orders/co2'
)

co3 = ChangeOrder.create(
  description: 'Builders are generous!',
  cost: -1000,
  approval: true,
  path: 'user/dmar/change_orders/co3'
)

puts "--Done Seeding Change_orders--"