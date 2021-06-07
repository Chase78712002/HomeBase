class MilestoneController < ApplicationController
  def index
    @milestones = Milestones.all

    render json: @milestones
  end

  def create
    @milestone = ChangeOrder.new milestone_params
    if @milestone.save
      render json: @milestone
    else
      render json: { error: milestone.errors.messages }, status: 422
    end
  end

  def update
    @milestone = Milestone.find params[:id]
    @milestone.update_attributes milestone_params

    render json: @milestone
  end

  def destroy
    @milestone = Milestone.find params[:id]

    if @milestone.destroy
      head :no_content
    else
      render json: { error: milestone.errors.messages }, status: 422
    end
  end

  private
    def milestone_params
      params.require(:milestone).permit(
        :description,
        :start_date,
        :end_date,
        :status,
        :reminder,
        :project_id
      )
    end
end
