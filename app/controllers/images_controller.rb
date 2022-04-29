class ImagesController < ApplicationController
  def index
    if params[:query].present?
      replace = params[:query].gsub(',', ' ')
      @images = Image.order(identifier: :asc).global_search(replace)
    else
      @images = Image.order(identifier: :asc).first(50)
    end
    # Not too clean but it works!
    if turbo_frame_request?
      render partial: "images", locals: { images: @images }
    else
      render :index
    end
  end
end