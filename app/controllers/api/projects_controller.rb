class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all

    #render all projects as json
    render json: @projects.as_json(include: :client)
  end

  def show
    @project = Project.find params[:id]


    #render single project as json
    render json: @project
  end
end
