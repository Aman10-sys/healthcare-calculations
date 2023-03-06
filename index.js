function bmi() {
    if ("Weight_Type" = "Pound") {
        if ("Height_Type" = "Inches") {
       return  (703 * ("Weight" / ("Height" * 0.0254)("Height" * 0.0254)) );
        }
        //              else: {
        //                 $cond: {
        //                     if: { "$eq": ["$Height_Type", "Feet"] }, "then":
        //                         round({
        //                             "$multiply": [703, { "$divide": ["$Weight", { "$multiply": [{ "$multiply": ["$Height", 0.3048] }, { "$multiply": ["$Height", 0.3048] }] }] }]
        //                         }), else: {
        //                             $cond: {
        //                                 if: { "$eq": ["$Height_Type", "Meters"] }, "then":
        //                                     round({
        //                                         "$multiply": [703, { "$divide": ["$Weight", { "$multiply": ["$Height", "$Height"] }] }]
        //                                     }), else: "Did not match!"
        //                             }
        //                         }
        //                 }
        //             }

        // }, else: {
        //     $cond: {
        //         if: { "$eq": ["$Weight_Type", "Kgs"] }, "then":
        //         {
        //             $cond: {
        //                 if: { "$eq": ["$Height_Type", "Feet"] }, "then":
        //                     round({
        //                         "$divide": ["$Weight", { "$multiply": [{ "$multiply": ["$Height", 0.3048] }, { "$multiply": ["$Height", 0.3048] }] }]
        //                     }), else: {
        //                         $cond: {
        //                             if: { "$eq": ["$Height_Type", "Inches"] }, "then":
        //                                 round({
        //                                     "$divide": ["$Weight", { "$multiply": [{ "$multiply": ["$Height", 0.0254] }, { "$multiply": ["$Height", 0.0254] }] }]
        //                                 }), else: {
        //                                     $cond: {
        //                                         if: { "$eq": ["$Height_Type", "Meters"] }, "then":
        //                                             round({
        //                                                 "$divide": ["$Weight", { "$multiply": ["$Height", "$Height"] }]
        //                                             }), else: "Did not match!"
        //                                     }
        //                                 }
        //                         }
        //                     }
        //             }
        //         }, else: "Did not match!"
        //     },
    } else {
       return "Did not match" ;
    }

}