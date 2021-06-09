class Api::ChangeOrderStatusController < ApplicationController
  def index
    @change_order_status = ChangeOrderStatus.all

    render json: @change_order_status
  end

  def create
  end

  def destroy
  end
end
