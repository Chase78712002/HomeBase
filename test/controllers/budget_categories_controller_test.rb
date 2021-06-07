require 'test_helper'

class BudgetCategoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get budget_categories_index_url
    assert_response :success
  end

  test "should get create" do
    get budget_categories_create_url
    assert_response :success
  end

  test "should get show" do
    get budget_categories_show_url
    assert_response :success
  end

  test "should get update" do
    get budget_categories_update_url
    assert_response :success
  end

  test "should get destroy" do
    get budget_categories_destroy_url
    assert_response :success
  end

end
