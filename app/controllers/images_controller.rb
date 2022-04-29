class ImagesController < ApplicationController
  def index
    if params[:query].present?
      replace = params[:query].gsub(',', ' ')
      @images = Image.order(identifier: :asc).global_search(replace)
    else
      @images = Image.order(identifier: :asc).first(50)
    end
  end
end