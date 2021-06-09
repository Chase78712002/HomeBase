class Api::TransactionBillsController < ApplicationController
  def index
    @transaction_bills = TransactionBill.all

    render json: @transaction_bills
  end

  def create
    @transaction_bill = TransactionBill.create! transaction_bill_params
    if @transaction_bill
      render json: @transaction_bill
    else
      render json: { error: @transaction_bill.errors.messages }, status: 422
    end
  end

  def show
    @transaction_bill = TransactionBill.find params[:id]

    render json: @transaction_bill
  end

  def update
    @transaction_bill = TransactionBill.find params[:id]
    @transaction_bill.update_attributes transaction_bill_params # setup which attributes we want to be read only etc
    render json: @transaction_bill
  end

  def destroy
    @transaction_bill = TransactionBill.find params[:id]

    if @transaction_bill.destroy
      head :no_content
    else
      render json: { error: transaction_bill.errors.messages }, status: 422
    end
  end

  private
    def transaction_bill_params
      params.require(:transaction_bill).permit(
        :description,
        :amount,
        :date,        
        :budget_category_id
      )
    end
end
