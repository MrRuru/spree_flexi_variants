ProductsHelper.class_eval do
  
  def plus_or_minus(ad_hoc_option_value)
    plus_or_minus=""
  
    if ad_hoc_option_value.price_modifier>0
      plus_or_minus = t("add")
    elsif ad_hoc_option_value.price_modifier<0
      plus_or_minus = t("subtract")
    end
  
    plus_or_minus
  end

end