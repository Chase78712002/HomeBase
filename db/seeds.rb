# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Creating project Seed data ...'

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