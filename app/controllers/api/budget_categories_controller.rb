class Api::BudgetCategoriesController < ApplicationController
  def index
    @budget_categories = BudgetCategory.all

    render json: @budget_categories
  end

  def create
    @budget_category = BudgetCategory.new budget_category_params
    if @budget_category.save
      render json: @budget_category
    else
      render json: { error: budget_category.errors.messages }, status: 422
    end
  end

  def show
    @budget_category = BudgetCategory.find params[:id]

    render json: @budget_category
  end

  def update
    @budget_category = BudgetCategory.find params[:id]
    @budget_category.update_attributes budget_category_params # setup which attributes we want to be read only etc
    render json: @budget_category
  end

  def destroy
    @budget_category = BudgetCategory.find params[:id]

    if @budget_category.destroy
      head :no_content
    else
      render json: { error: budget_category.errors.messages }, status: 422
    end
  end

  private
    def budget_category_params
      params.require(:budget_category).permit(
        :description,
        :estimate_amount,
        :project_id,
        :actual_amount
      )
    end

end
