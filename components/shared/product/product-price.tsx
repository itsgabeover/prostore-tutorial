import { cn } from "@/lib/utils";

const ProductPrice = ({value, className}: {value: number; className?: string}) => {
    //ensure two decimal places
    const stringvalue = value.toFixed(2);
    //get the int/float
    const [int, float] = stringvalue.split(".");
    
    return ( 
        <p className={cn('text-2xl', className)}>
            <span className="text-xs align-super">$</span>
            <span className="font-bold">{int}</span>
            <span className="text-xs align-super">.{float}</span>
        </p>
     );
}
 
export default ProductPrice;