require 'test_helper'

class TransactionBillsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get transaction_bills_index_url
    assert_response :success
  end

  test "should get create" do
    get transaction_bills_create_url
    assert_response :success
  end

  test "should get show" do
    get transaction_bills_show_url
    assert_response :success
  end

  test "should get update" do
    get transaction_bills_update_url
    assert_response :success
  end

  test "should get destroy" do
    get transaction_bills_destroy_url
    assert_response :success
  end

end
