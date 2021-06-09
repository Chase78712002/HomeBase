puts 'Destroying previously seeded data ...'
Project.destroy_all
Document.destroy_all
ChangeOrder.destroy_all
BudgetCategory.destroy_all
TransactionBill.destroy_all
Builder.destroy_all
Client.destroy_all

puts 'Creating USER Seed data ...'

user1 = Builder.create(
  first_name: 'Bob',
  last_name: 'The Builder',
  email: 'BobbyBuilds@gmail.com',
  password: '1234'
)

user2 = Client.create(
  first_name: 'Sally',
  last_name: 'Silly',
  email: 'SillySally@hotmail.com',
  password: 'qwer'
)

user3 = Client.create(
  first_name: 'Third',
  last_name: 'User_Person',
  email: 'email@hotmail.com',
  password: 'asdf123'
)

puts "--Done Seeding Users--"
puts 'Creating PROJECT Seed data ...'

project1 = Project.create(
  name: 'Project 1 - Kolumbeya',
  start_date: Date.today,
  end_date: Date.today + 30, #days
  image: 'dmar/images/1',
  builder_id: 1,
  client_id: 1
)

project2 = Project.create(
  name: 'Project 2 - Toronto',
  start_date: Date.today,
  end_date: Date.today + 60,
  image: 'dmar/images/2',
  builder_id: 1,
  client_id: 2
)

project3 = Project.create(
  name: 'Project 3 - Mumbai',
  start_date: Date.today,
  end_date: Date.today + 90,
  image: 'dmar/images/3',
  builder_id: 2,
  client_id: 3
)
puts "--Done Seeding Projects--"
puts 'Creating DOCUMENT_CATEGORIES Seed data ...'

docCat1 = DocumentCategory.create(
  description: 'Floor plan'
)

docCat2 = DocumentCategory.create(
  description: 'Email'

)

docCat3 = DocumentCategory.create(
  description: 'Contract'

)

puts "--Done Seeding TransactionBill--"
puts 'Creating DOCUMENT Seed data ...'

document1 = Document.create(
  title: 'Big Contract',
  category_type: 'Contract',
  path: 'user/dmar/documents',
  document_category_id: 1,
  project_id: 1
)

document2 = Document.create(
  title: 'Floor Plan Option #2',
  category_type: 'Floor Plan',
  path: 'user/dmar/documents/floorplans',
  document_category_id: 1,
  project_id: 1
)

document3 = Document.create(
  title: 'Window Options',
  category_type: 'Supplementary',
  path: 'user/dmar/documents/windows',
  document_category_id: 2,
  project_id: 2
)

puts "--Done Seeding Documents--"
puts 'Creating CHANGE_ORDER Seed data ...'

co1 = ChangeOrder.create!(
  description: 'Lorem Ipsum a bunch',
  cost: 100,
  #test for false default approval
  path: 'user/dmar/change_orders/co1',
  project_id: 1
)

co2 = ChangeOrder.create!(
  description: 'Change to bathroom paint',
  cost: 2100,
  approval: true,
  path: 'user/dmar/change_orders/co2',
  project_id: 2
)

co3 = ChangeOrder.create!(
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
  estimate_amount: 1234,
  project_id: 1
)

budget2 = BudgetCategory.create(
  description: 'Heating',
  estimate_amount: 42069,
  project_id: 1
)

budget3 = BudgetCategory.create(
  description: 'Walls',
  estimate_amount: 666,
  project_id: 1
)

puts "--Done Seeding Budget_Categoies--"
puts 'Creating MILESTONE Seed data ...'

mile1 = Milestone.create(
  description: 'Ground Break',
  start_date: Date.today,
  end_date: Date.today + 1.day,
  status: 'Active',
  reminder: true,
  project_id: 1
)

mile2 = Milestone.create(
  description: 'First Floor Done',
  start_date: Date.today + 2.month,
  end_date: Date.today + 3.months,
  status: 'Complete',
  reminder: true,
  project_id: 1
)

mile3 = Milestone.create(
  description: 'House Done',
  start_date: Date.today + 1.month,
  end_date: Date.today + 6.months,
  status: 'Canceled',
  reminder: true,
  project_id: 1
)

puts "--Done Seeding Milestone--"
puts 'Creating TRANSACTION Seed data ...'

trans1 = TransactionBill.create(
  description: 'Red Paint',
  amount: 33,
  date: Date.today, 
  change_order_id: 1,
  budget_category_id: 1,
  milestone_id: 1
)

trans2 = TransactionBill.create(
  description: 'Stainless Steel Faucet',
  amount: 222,
  date: Date.today - 2.days,
  change_order_id: 1,
  budget_category_id: 2,
  milestone_id: 2
)

trans3 = TransactionBill.create(
  description: 'Lava Gas',
  amount: 2020,
  date: Date.today - 3.days,
  change_order_id: 1,
  budget_category_id: 1,
  milestone_id: 1
)

puts "--Done Seeding TransactionBill--"

