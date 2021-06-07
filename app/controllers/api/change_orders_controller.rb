class ChangeOrdersController < ApplicationController
  def index
    @change_orders = ChangeOrder.all

    render json: @change_orders
  end

  def create
    @change_order = ChangeOrder.new change_order_params
    if @change_order.save
      render json: @change_order
    else
      render json: { error: change_order.errors.messages }, status: 422
    end
  end

  def update
    @change_order = ChangeOrder.find params[:id]
    @change_order.update_attributes change_order_params # setup which attributes we want to be read only etc
    render json: @change_order
  end

  def destroy
    @change_order = ChangeOrder.find params[:id]

    if @change_order.destroy
      head :no_content
    else
      render json: { error: change_order.errors.messages }, status: 422
    end
  end

  private
    def change_orders_params
      params.require(:change_order).permit(
        :description,
        :cost,
        :approval,
        :path,
        :project_id
      )
    end
end
