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
puts 'Creating PROJECT Seed data ...'

project1 = Project.create(
  name: 'Silly Beach House',
  start_date: Date.today - 30,
  end_date: Date.today + 42, #days
  image: "https://source.unsplash.com/rChFUMwAe7E",
  address: "612 Loucks Dr Victoria BC V8P 1B7",
  avatarSrc: "https://source.unsplash.com/AJIqZDAUD7A",
  builder_id: 1,
  client_id: 1
)

project2 = Project.create(
  name: 'Mountainview',
  start_date: Date.today - 25,
  end_date: Date.today + 60,
  image: "https://source.unsplash.com/R1uiDu8vBh0",
  avatarSrc: "https://source.unsplash.com/6anudmpILw4",
  
  address: "240 Foxhaven Dr Sherwood Park AB T8B 6L1",
  builder_id: 1,
  client_id: 2
)

project3 = Project.create(
  name: 'Modern farmhouse',
  start_date: Date.today - 7,
  end_date: Date.today + 85,
  image: "https://source.unsplash.com/aren8nutd1Q",
  address: "15317 21 Ave Surrey BC V1M 6A8",
  avatarSrc: "https://source.unsplash.com/rDEOVtE7vOs",
  builder_id: 1,
  client_id: 3
)

project4 = Project.create(
  name: 'Tiptaft Hideaway',
  start_date: Date.today,
  end_date: Date.today + 100,
  image: "https://source.unsplash.com/TiVPTYCG_3E",
  address: "75 John St W 504 Vancouver BC L1H 1W9",
  avatarSrc: "https://source.unsplash.com/X6Uj51n5CE8",
  builder_id: 2,
  client_id: 4
)

project5 = Project.create(
  name: 'Petrazzi modern',
  start_date: Date.today + 7,
  end_date: Date.today + 150,
  image: "https://source.unsplash.com/_TPTXZd9mOo",
  address: "7161 Ave De La Deviniere , Calgary AB, T2A 3S8",
  avatarSrc: "https://source.unsplash.com/bLpMy2UDnOc",
  builder_id: 2,
  client_id: 5
)

project6 = Project.create(
  name: 'Mead acreage',
  start_date: Date.today + 14,
  end_date: Date.today + 180,
  image: "https://source.unsplash.com/RCF5KSWb7Ms",
  address: "1 Lomond Dr Etobicoke BC M8V 2Z3",
  avatarSrc: "https://source.unsplash.com/3TLl_97HNJo",
  builder_id: 2,
  client_id: 6
)

puts "--Done Seeding Projects--"
puts 'Creating DOCUMENT_CATEGORIES Seed data ...'

docCat1 = DocumentCategory.create(
  description: 'Floor plan'
)

docCat2 = DocumentCategory.create(
  description: 'Supplementary'

)

docCat3 = DocumentCategory.create(
  description: 'Contract'

)

puts "--Done Seeding TransactionBill--"
puts 'Creating DOCUMENT Seed data ...'

document1 = Document.create(
  title: 'Final contract',
  category_type: 'Contract',
  path: 'user/dmar/documents/contract',
  document_category_id: 1,
  project_id: 1
)

document2 = Document.create(
  title: 'Floor Plan Option #1',
  category_type: 'Floor Plan',
  path: 'user/dmar/documents/floorplan1',
  document_category_id: 1,
  project_id: 1
)

document3 = Document.create(
  title: 'Countertop selections',
  category_type: 'Supplementary',
  path: 'user/dmar/documents/countertops',
  document_category_id: 2,
  project_id: 1
)

document4 = Document.create(
  title: 'Pricing schedule',
  category_type: 'Supplementary',
  path: 'user/dmar/documents/pricing',
  document_category_id: 1,
  project_id: 1
)

document5 = Document.create(
  title: 'Floor Plan Option #2',
  category_type: 'Floor Plan',
  path: 'user/dmar/documents/floorplan2',
  document_category_id: 1,
  project_id: 1
)

document6 = Document.create(
  title: 'Cabinets',
  category_type: 'Supplementary',
  path: 'user/dmar/documents/cabinets',
  document_category_id: 2,
  project_id: 1
)

document7 = Document.create(
  title: 'Lighting selections',
  category_type: 'Supplementary',
  path: 'user/dmar/documents/lighting',
  document_category_id: 2,
  project_id: 1
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
  description: 'Soundproofing insultation',
  cost: 585.00,
  change_order_status_id: 1,
  quantity: 1,
  path: 'user/dmar/change_orders/co1',
  project_id: 1,
  details: 'Add soundproofing insulation to bedrooms.'
)

co2 = ChangeOrder.create!(
  description: 'Air conditioning',
  cost: 7786.00,
  change_order_status_id: 2,
  quantity: 2,
  path: 'user/dmar/change_orders/co2',
  project_id: 1,
  details: 'Two-ton air conditioning unit, including electrical.'
)

co3 = ChangeOrder.create!(
  description: 'Gym floor',
  cost: 2885,
  change_order_status_id: 3,
  quantity: 1,
  path: 'user/dmar/change_orders/co3',
  project_id: 1,
  details: 'Credit for carpet and replace with cork flooring'
)

co4 = ChangeOrder.create!(
  description: 'CREDIT: Pantry shelves',
  cost: -975,
  change_order_status_id: 1,
  quantity: 1,
  path: 'user/dmar/change_orders/co4',
  project_id: 1,
  details: 'Credit for Credit for all MDF shelving.'
)

co5 = ChangeOrder.create!(
  description: 'Stone fireplace facing',
  cost: 1200,
  change_order_status_id: 2,
  quantity: 1,
  path: 'user/dmar/change_orders/co5',
  project_id: 1,
  details: 'Stone facing for living room fireplace.'
)

co6 = ChangeOrder.create!(
  description: 'Vinyl deck',
  cost: 7525,
  change_order_status_id: 1,
  quantity: 1,
  path: 'user/dmar/change_orders/co6',
  project_id: 1,
  details: 'Add vinyl deck with smartboard skirt, aluminum picket railing and pressure treated deck stair.'
)

co7 = ChangeOrder.create!(
  description: 'Mudroom built-ins',
  cost: 4500,
  change_order_status_id: 3,
  quantity: 1,
  path: 'user/dmar/change_orders/co7',
  project_id: 1,
  details: 'Add closed storage in mudroom (MDF).'
)

co8 = ChangeOrder.create!(
  description: 'Wine room',
  cost: 5000,
  change_order_status_id: 1,
  quantity: 1,
  path: 'user/dmar/change_orders/co8',
  project_id: 1,
  details: 'Add a wine wall and 10mm glass panel door for the wine room.'
)

puts "--Done Seeding Change_orders--"
puts 'Creating BUDGET_CATEGORIES Seed data ...'

budget1 = BudgetCategory.create(
  description: 'Base constuction fees',
  estimate_amount: 450000,
  project_id: 1,
  actual_amount: 211500
)

budget2 = BudgetCategory.create(
  description: 'Upgrades',
  estimate_amount: 50000,
  project_id: 1,
  actual_amount: 13110
)

budget3 = BudgetCategory.create(
  description: 'Appliances',
  estimate_amount: 15000,
  project_id: 1,
  actual_amount: 11162
)

puts "--Done Seeding Budget_Categoies--"
puts 'Creating MILESTONE Seed data ...'

mile1 = Milestone.create(
  description: 'Ground Breaking',
  start_date: Date.today - 120.days,
  end_date: Date.today - 120.days,
  status: 'Complete',
  reminder: true,
  project_id: 1
)

mile2 = Milestone.create(
  description: 'Selections due',
  start_date: Date.today - 115.days,
  end_date: Date.today - 115.days,
  status: 'Complete',
  reminder: true,
  project_id: 1
)

mile3 = Milestone.create(
  description: 'Backfill complete',
  start_date: Date.today - 90.days,
  end_date: Date.today - 90.days,
  status: 'Complete',
  reminder: true,
  project_id: 1
)

mile4 = Milestone.create(
  description: 'Framing complete',
  start_date: Date.today - 60.days,
  end_date: Date.today - 60.days,
  status: 'Complete',
  reminder: true,
  project_id: 1
)

mile5 = Milestone.create(
  description: 'Rough-ins complete',
  start_date: Date.today - 60.days,
  end_date: Date.today - 60.days,
  status: 'Complete',
  reminder: true,
  project_id: 1
)

mile6 = Milestone.create(
  description: 'Drywall complete',
  start_date: Date.today - 30.days,
  end_date: Date.today - 30.days,
  status: 'Complete',
  reminder: true,
  project_id: 1
)

mile7 = Milestone.create(
  description: 'Stage 1 finishing complete',
  start_date: Date.today,
  end_date: Date.today,
  status: 'Upcoming',
  reminder: true,
  project_id: 1
)

mile8 = Milestone.create(
  description: 'Painting and flooring complete',
  start_date: Date.today + 14.days,
  end_date: Date.today + 14.days,
  status: 'Upcoming',
  reminder: true,
  project_id: 1
)

mile9 = Milestone.create(
  description: 'Final finishes complete',
  start_date: Date.today + 30.days,
  end_date: Date.today + 30.days,
  status: 'Upcoming',
  reminder: true,
  project_id: 1
)

mile10 = Milestone.create(
  description: 'Pre-occupancy walkthrough',
  start_date: Date.today + 38.days,
  end_date: Date.today + 38.days,
  status: 'Upcoming',
  reminder: true,
  project_id: 1
)

mile11 = Milestone.create(
  description: 'Possesion day!',
  start_date: Date.today + 42.days,
  end_date: Date.today + 42.days,
  status: 'Upcoming',
  reminder: true,
  project_id: 1
)

puts "--Done Seeding Milestone--"
puts 'Creating TRANSACTION Seed data ...'

trans1 = TransactionBill.create!(
  description: 'Deposit payment',
  amount: 45000,
  date: Date.today - 150.days, 
  budget_category_id: 1,
)

trans2 = TransactionBill.create!(
  description: 'Payment: Backfill complete',
  amount: 63000,
  date: Date.today - 90.days,
  budget_category_id: 1,
)

trans3 = TransactionBill.create!(
  description: 'Soundproofing insulation',
  amount: 585,
  date: Date.today - 75.days,
  budget_category_id: 2,
)

trans4 = TransactionBill.create!(
  description: 'Payment: Plumbing rough-in complete',
  amount: 103500,
  date: Date.today - 60.days,
  budget_category_id: 1,
)

trans5 = TransactionBill.create!(
  description: 'Super fancy mini bar fridge',
  amount: 728,
  date: Date.today - 50.days,
  budget_category_id: 3,
)

trans6 = TransactionBill.create!(
  description: 'Double wall oven',
  amount: 2800,
  date: Date.today - 42.days,
  budget_category_id: 3,
)

trans7 = TransactionBill.create!(
  description: 'Super fancy faucet',
  amount: 299,
  date: Date.today - 30.days,
  budget_category_id: 2,
)

trans8 = TransactionBill.create!(
  description: 'Deck',
  amount: 7525,
  date: Date.today - 21.days,
  budget_category_id: 2,
)

trans9 = TransactionBill.create!(
  description: 'Gas stove',
  amount: 1994,
  date: Date.today - 15.days,
  budget_category_id: 3,
)

trans10 = TransactionBill.create!(
  description: 'Wine room',
  amount: 5000,
  date: Date.today - 9.days,
  budget_category_id: 2,
)

trans11 = TransactionBill.create!(
  description: 'Smart fridge',
  amount: 2899,
  date: Date.today - 3.days,
  budget_category_id: 3,
)

trans12 = TransactionBill.create!(
  description: 'Super quiet dishwasher',
  amount: 549,
  date: Date.today - 3.days,
  budget_category_id: 3,
)

trans13 = TransactionBill.create!(
  description: 'Front load steam washer & dryer',
  amount: 2192,
  date: Date.today - 3.days,
  budget_category_id: 3,
)

puts "--Done Seeding TransactionBill--"
