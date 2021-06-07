require 'test_helper'

class ChangeOrdersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get change_orders_index_url
    assert_response :success
  end

  test "should get create" do
    get change_orders_create_url
    assert_response :success
  end

  test "should get update" do
    get change_orders_update_url
    assert_response :success
  end

  test "should get destroy" do
    get change_orders_destroy_url
    assert_response :success
  end

end
