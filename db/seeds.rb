# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Destroying previously seeded data ...'
Project.destroy_all
User.destroy_all
Document.destroy_all
ChangeOrder.destroy_all
BudgetCategory.destroy_all
Transaction.destroy_all
UserType.destroy_all

puts 'Creating PROJECT Seed data ...'

project1 = Project.create(
  name: 'Project 1 - Kolumbeya',
  start_date: Date.today,
  end_date: Date.today + 30 #days
)

project2 = Project.create(
  name: 'Project 2 - Toronto',
  start_date: Date.today,
  end_date: Date.today + 60
)

project3 = Project.create(
  name: 'Project 3 - Mumbai',
  start_date: Date.today,
  end_date: Date.today + 90
)
puts "--Done Seeding Projects--"
puts 'Creating USER_TYPE Seed data ...'

builder = UserType.create(
  description: 'Builder'
)

client = UserType.create(
  description: 'Client'
)

puts "--Done Seeding User_Type--"
puts 'Creating DOCUMENT Seed data ...'

document1 = Document.create(
  title: 'Big Contract',
  category_type: 'Contract',
  path: 'user/dmar/documents',
  project_id: project1.id
)

document2 = Document.create(
  title: 'Floor Plan Option #2',
  category_type: 'Floor Plan',
  path: 'user/dmar/documents/floorplans',
  project_id: project1.id
)

document3 = Document.create(
  title: 'Window Options',
  category_type: 'Supplementary',
  path: 'user/dmar/documents/windows',
  project_id: project1.id
)

puts "--Done Seeding Documents--"
puts 'Creating CHANGE_ORDER Seed data ...'

co1 = ChangeOrder.create(
  description: 'Lorem Ipsum a bunch',
  cost: 100,
  path: 'user/dmar/change_orders/co1',
  project_id: 1
)

co2 = ChangeOrder.create(
  description: 'Change to bathroom paint',
  cost: 2100,
  approval: true,
  path: 'user/dmar/change_orders/co2',
  project_id: 2
)

co3 = ChangeOrder.create(
  description: 'Builders are generous!',
  cost: -1000,
  approval: true,
  path: 'user/dmar/change_orders/co3',
  project_id: 2
)

puts "--Done Seeding Change_orders--"
puts 'Creating BUDGET_CATEGORIES Seed data ...'

budget1 = BudgetCategory.create(
description: 'Floors',
  estimate_amount: 1234
)

budget2 = BudgetCategory.create(
  description: 'Heating',
  estimate_amount: 42069
)

budget3 = BudgetCategory.create(
  description: 'Walls',
  estimate_amount: 666
)

puts "--Done Seeding Budget_Categoies--"
puts 'Creating USER Seed data ...'

user1 = User.create(
  first_name: 'Bob',
  last_name: 'The Builder',
  email: 'BobbyBuilds@gmail.com',
  password: '1234',
  user_type_id: 1
)

user2 = User.create(
  first_name: 'Sally',
  last_name: 'Silly',
  email: 'SillySally@hotmail.com',
  password: 'qwer',
  user_type_id: 2
)

user3 = User.create(
  first_name: 'Third',
  last_name: 'User_Person',
  email: 'email@hotmail.com',
  password: 'asdf123',
  user_type_id: 2
)

puts "--Done Seeding Users--"
puts 'Creating TRANSACTION Seed data ...'

trans1 = Transaction.create(
  description: 'Red Paint',
  amount: 33,
  date: Date.today
)

trans2 = Transaction.create(
  description: 'Stainless Steel Faucet',
  amount: 222,
  date: Date.today - 2.days
)

trans3 = Transaction.create(
  description: 'Lava Gas',
  amount: 2020,
  date: Date.today - 3.days
)

puts "--Done Seeding Budget_Categoies--"
puts 'Creating MILESTONE Seed data ...'

mile1 = Milestone.create(
  description: 'Ground Break',
  start_date: Date.today,
  end_date: Date.today + 1.day,
  status: 'Active',
  reminder: true
)

mile2 = Milestone.create(
  description: 'First Floor Done',
  start_date: Date.today + 2.month,
  end_date: Date.today + 3.months,
  status: 'Upcoming',
  reminder: true
)

mile3 = Milestone.create(
  description: 'House Done',
  start_date: Date.today + 1.month,
  end_date: Date.today + 6.months,
  status: 'Upcoming',
  reminder: true
)

puts "--Done Seeding Milestone--"

