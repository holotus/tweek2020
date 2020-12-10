export class SegmentHelper {
    static ProductViewed = (product_id:Number, product_value:number, product_name:string, product_department:string) => {
        (window as { [key: string]: any })["analytics"].track("Product Viewed", {
            product_id: product_id,
            value: product_value,
            product_name: product_name,
            product_department: product_department
          });
    }

    static ProductAddedToCart = (product_id:Number, product_value:number, product_name:string, product_department:string, variant_id:Number) => {
        (window as { [key: string]: any })["analytics"].track("Product AddedToCart", {
            product_id: product_id,
            value: product_value,
            product_name: product_name,
            product_department: product_department,
            variant_id: variant_id
          });
        // (window as { [key: string]: any })["analytics"].page();
    }
}