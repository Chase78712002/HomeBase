class ReplacePasswordWithPasswordDigestToBuilderAndClient < ActiveRecord::Migration[6.0]
  def change
    remove_column :clients, :password
    add_column :clients, :password_digest, :string
    
    remove_column :builders, :password
    add_column :builders, :password_digest, :string
  end
end
