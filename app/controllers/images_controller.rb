class ImagesController < ApplicationController
  def index
    @images = Image.first(50)
  end
end