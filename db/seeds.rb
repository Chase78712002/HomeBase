# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Creating PROJECT Seed data ...'

project1 = Project.create(
  name: 'Project 1',
  start_date: Time.now,
  end_date: Time.now + 30 #days
)

project2 = Project.create(
  name: 'Project 1',
  start_date: Time.now,
  end_date: Time.now + 60
)

project3 = Project.create(
  name: 'Project 1',
  start_date: Time.now,
  end_date: Time.now + 90
)
puts "--Done Seeding Projects--"
puts 'Creating USER Seed data ...'

user1 = User.create(
  first_name: 'Bob',
  last_name: 'The Builder',
  email: 'BobbyBuilds@gmail.com',
  password: '1234',
  value: 1
)

user2 = User.create(
  first_name: 'Sally',
  last_name: 'Silly',
  email: 'SillySally@hotmail.com',
  password: 'qwer',
  value: 2
)

user3 = User.create(
  first_name: 'Third',
  last_name: 'User_Person',
  email: 'email@hotmail.com',
  password: 'asdf123',
  value: 3
)

puts "--Done Seeding Users--"