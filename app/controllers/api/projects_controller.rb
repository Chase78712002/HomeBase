module Api
  class ProjectsController < ApplicationController
    
    def index
      @projects = Project.all

      #render all projects as json
      render json: @projects
    end

    def show
      @project = Project.find params[:id]

      #render single project as json
      render json: @project
    end

  end
end
