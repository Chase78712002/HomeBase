class AddAvatarSrcToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :avatarSrc, :string
  end
end
