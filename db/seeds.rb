puts 'Destroying previously seeded data ...'
Project.destroy_all
Document.destroy_all
ChangeOrder.destroy_all
BudgetCategory.destroy_all
TransactionBill.destroy_all
<<<<<<< HEAD
# Builder.destroy_all
# Client.destroy_all

# puts 'Creating USER Seed data ...'

# user1 = Builder.create(
#   first_name: 'Bob',
#   last_name: 'The Builder',
#   email: 'BobbyBuilds@gmail.com',
#   password_digest: '1234'
# )

# user2 = Client.create(
#   first_name: 'Sally',
#   last_name: 'Silly',
#   email: 'SillySally@hotmail.com',
#   password: 'qwer'
# )

# user3 = Client.create(
#   first_name: 'Third',
#   last_name: 'User_Person',
#   email: 'email@hotmail.com',
#   password: 'asdf123'
# )

# puts "--Done Seeding Users--"
=======
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
  first_name: 'Teddie',
  last_name: 'Skipsey',
  email: 'tskipsey5@un.org',
  password: 'xVR8JjWRe1'
)

user4 = Builder.create(
  first_name: 'Farmer',
  last_name: 'Pickles',
  email: 'FPickles@gmail.com',
  password: '4321'
)

user5 = Client.create(
  first_name:"Gerrie",
  last_name:"Streeth",email:"glongstreeth0@smugmug.com",password:"D8vvruvjpabA"
)
user6 = Client.create(
  first_name:"Pierce",
  last_name:"Tiptaft",
  email:"ptiptaft1@cornell.edu",
  password:"dX9LCxyzd"
)
user7 = Client.create(
  first_name:"Clayton",
  last_name:"Petrazzi",
  email:"cpetrazzi2@wiley.com",
  password:"xebHPDxTV"
)
user8 = Client.create(
  first_name:"Janine",
  last_name:"Mead",
  email:"jmead3@ustream.tv",
  password:"chbj0G6dSGSz"
)

puts "--Done Seeding Users--"
>>>>>>> faef01953c79ee93a48c2500c836f0b60dd50fca
puts 'Creating PROJECT Seed data ...'

project1 = Project.create(
  name: 'Project 1 - Kolumbeya',
  start_date: Date.today,
  end_date: Date.today + 30, #days
  image: "/Images/Houses/1.jpg",
  address: "612 Loucks Dr Calgary AB K4R 1B7",
  avatarSrc: "/Images/Avatars/1.jpg",
  builder_id: 1,
  client_id: 1
)

project2 = Project.create(
  name: 'Project 2 - Toronto',
  start_date: Date.today,
  end_date: Date.today + 60,
  image: "/Images/Houses/2.jpg",
  avatarSrc: "/Images/Avatars/2.jpg",
  address: "240 Foxhaven Dr Sherwood Park AB T8A 6L1",
  builder_id: 1,
  client_id: 2
)

project3 = Project.create(
  name: 'Project 3 - Mumbai',
  start_date: Date.today,
  end_date: Date.today + 90,
  image: "/Images/Houses/3.jpg",
  address: "15317 21 Ave Surrey BC V4A 6A8",
  avatarSrc: "/Images/Avatars/3.jpg",
  builder_id: 1,
  client_id: 3
)

project4 = Project.create(
  name: 'Project PlumbeousSilver',
  start_date: Date.today,
  end_date: Date.today + 90,
  image: "/Images/Houses/4.jpg",
  address: "75 John St W 504 Vancouver BC L1H 1W9",
  avatarSrc: "/Images/Avatars/4.jpg",
  builder_id: 2,
  client_id: 4
)

project5 = Project.create(
  name: 'Project NigricantBronze',
  start_date: Date.today,
  end_date: Date.today + 90,
  image: "/Images/Houses/5.jpg",
  address: "7161 Ave De La Deviniere , Vancouver, BC, H1K 3S8",
  avatarSrc: "/Images/Avatars/5.jpg",
  builder_id: 2,
  client_id: 5
)

project6 = Project.create(
  name: 'Project NiveousZinc',
  start_date: Date.today,
  end_date: Date.today + 90,
  image: "/Images/Houses/6.jpg",
  address: "1 Lomond Dr Etobicoke BC M8X 2Z3",
  avatarSrc: "/Images/Avatars/6.jpg",
  builder_id: 2,
  client_id: 6
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
puts 'Creating Change_order_status Seed data ...'

co_status1 = ChangeOrderStatus.create!(
  status: 'Approved' 
)

co_status2 = ChangeOrderStatus.create!(
  status: 'Declined' 
)

co_status3 = ChangeOrderStatus.create!(
  status: 'Pending' 
)

puts "--Done Seeding change_order_status--"
puts 'Creating CHANGE_ORDER Seed data ...'

co1 = ChangeOrder.create!(
  description: 'Lorem Ipsum a bunch',
  cost: 100,
  change_order_status_id: 2,
  quantity: 1,
  path: 'user/dmar/change_orders/co1',
  project_id: 1
)

co2 = ChangeOrder.create!(
  description: 'Change to bathroom paint',
  cost: 2100,
  change_order_status_id: 1,
  quantity: 2,
  path: 'user/dmar/change_orders/co2',
  project_id: 2
)

co3 = ChangeOrder.create!(
  description: 'Builders are generous!',
  cost: -1000,
  change_order_status_id: 3,
  quantity: 1,
  path: 'user/dmar/change_orders/co3',
  project_id: 2
)

puts "--Done Seeding Change_orders--"
puts 'Creating BUDGET_CATEGORIES Seed data ...'

budget1 = BudgetCategory.create(
  description: 'Floors',
  estimate_amount: 1234,
  project_id: 1,
  actual_amount: 1000
)

budget2 = BudgetCategory.create(
  description: 'Heating',
  estimate_amount: 42069,
  project_id: 1,
  actual_amount: 4000
)

budget3 = BudgetCategory.create(
  description: 'Walls',
  estimate_amount: 666,
  project_id: 1,
  actual_amount: 300
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

trans1 = TransactionBill.create!(
  description: 'Red Paint',
  amount: 33,
  date: Date.today, 
  budget_category_id: 1,
)

trans2 = TransactionBill.create!(
  description: 'Stainless Steel Faucet',
  amount: 222,
  date: Date.today - 2.days,
  budget_category_id: 2,
)

trans3 = TransactionBill.create!(
  description: 'Lava Gas',
  amount: 2020,
  date: Date.today - 3.days,
  budget_category_id: 1,
)

trans4 = TransactionBill.create!(
  description: 'Potato Peeler',
  amount: 123,
  date: Date.today + 5.weeks,
  budget_category_id: 1,
  milestone_id: 1
)

puts "--Done Seeding TransactionBill--"

