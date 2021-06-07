class ChangeOrdersController < ApplicationController
  def index
    @change_orders = ChangeOrder.all

    render json: @change_orders
  end

  def create
    @change_orders = ChangeOrder.new change_orders_params
    if @change_orders.save
      render json: @change_orders
    else
      render json: { error: change_orders.errors.messages }, status: 422
    end
  end

  def update
    @change_orders = ChangeOrder.find params[:id]
    @change_orders.update_attributes change_orders_params # setup which attributes we want to be read only etc
    render json: @change_orders
  end

  def destroy
    @change_orders = ChangeOrder.find params[:id]

    if @change_orders.destroy
      head :no_content
    else
      render json: { error: change_orders.errors.messages }, status: 422
    end
  end

  private
    def change_orders_params
      params.require(:change_order_params).permit(
        :description,
        :cost,
        :approval,
        :path,
        :project_id
      )
    end
end
