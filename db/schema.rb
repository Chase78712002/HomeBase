# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_07_210323) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "budget_categories", force: :cascade do |t|
    t.string "description"
    t.integer "estimate_amount"
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_budget_categories_on_project_id"
  end

  create_table "change_orders", force: :cascade do |t|
    t.string "description"
    t.integer "cost"
    t.boolean "approval", default: false
    t.string "path"
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_change_orders_on_project_id"
  end

  create_table "documents", force: :cascade do |t|
    t.string "title"
    t.string "category_type"
    t.string "path"
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_documents_on_project_id"
  end

  create_table "milestones", force: :cascade do |t|
    t.string "description"
    t.date "start_date"
    t.date "end_date"
    t.string "status"
    t.boolean "reminder", default: false
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_milestones_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.date "start_date"
    t.date "end_date"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "builder_id"
    t.integer "client_id"
  end

  create_table "transaction_bills", force: :cascade do |t|
    t.string "description"
    t.integer "amount"
    t.date "date"
    t.bigint "change_order_id", null: false
    t.bigint "milestone_id", null: false
    t.bigint "budget_category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["budget_category_id"], name: "index_transaction_bills_on_budget_category_id"
    t.index ["change_order_id"], name: "index_transaction_bills_on_change_order_id"
    t.index ["milestone_id"], name: "index_transaction_bills_on_milestone_id"
  end

  create_table "user_types", force: :cascade do |t|
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.bigint "user_type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_type_id"], name: "index_users_on_user_type_id"
  end

  add_foreign_key "budget_categories", "projects"
  add_foreign_key "change_orders", "projects"
  add_foreign_key "documents", "projects"
  add_foreign_key "milestones", "projects"
  add_foreign_key "transaction_bills", "budget_categories"
  add_foreign_key "transaction_bills", "change_orders"
  add_foreign_key "transaction_bills", "milestones"
  add_foreign_key "users", "user_types"
end
