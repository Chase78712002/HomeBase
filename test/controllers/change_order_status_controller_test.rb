require 'test_helper'

class ChangeOrderStatusControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get change_order_status_index_url
    assert_response :success
  end

end
