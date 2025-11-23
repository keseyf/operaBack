import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Donate
 *
 */
export type DonateModel = runtime.Types.Result.DefaultSelection<Prisma.$DonatePayload>;
export type AggregateDonate = {
    _count: DonateCountAggregateOutputType | null;
    _avg: DonateAvgAggregateOutputType | null;
    _sum: DonateSumAggregateOutputType | null;
    _min: DonateMinAggregateOutputType | null;
    _max: DonateMaxAggregateOutputType | null;
};
export type DonateAvgAggregateOutputType = {
    donate: number | null;
};
export type DonateSumAggregateOutputType = {
    donate: number | null;
};
export type DonateMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    message: string | null;
    donate: number | null;
    createAt: Date | null;
};
export type DonateMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    message: string | null;
    donate: number | null;
    createAt: Date | null;
};
export type DonateCountAggregateOutputType = {
    id: number;
    name: number;
    message: number;
    donate: number;
    createAt: number;
    _all: number;
};
export type DonateAvgAggregateInputType = {
    donate?: true;
};
export type DonateSumAggregateInputType = {
    donate?: true;
};
export type DonateMinAggregateInputType = {
    id?: true;
    name?: true;
    message?: true;
    donate?: true;
    createAt?: true;
};
export type DonateMaxAggregateInputType = {
    id?: true;
    name?: true;
    message?: true;
    donate?: true;
    createAt?: true;
};
export type DonateCountAggregateInputType = {
    id?: true;
    name?: true;
    message?: true;
    donate?: true;
    createAt?: true;
    _all?: true;
};
export type DonateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Donate to aggregate.
     */
    where?: Prisma.DonateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Donates to fetch.
     */
    orderBy?: Prisma.DonateOrderByWithRelationInput | Prisma.DonateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DonateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Donates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Donates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Donates
    **/
    _count?: true | DonateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DonateAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DonateSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DonateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DonateMaxAggregateInputType;
};
export type GetDonateAggregateType<T extends DonateAggregateArgs> = {
    [P in keyof T & keyof AggregateDonate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDonate[P]> : Prisma.GetScalarType<T[P], AggregateDonate[P]>;
};
export type DonateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonateWhereInput;
    orderBy?: Prisma.DonateOrderByWithAggregationInput | Prisma.DonateOrderByWithAggregationInput[];
    by: Prisma.DonateScalarFieldEnum[] | Prisma.DonateScalarFieldEnum;
    having?: Prisma.DonateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DonateCountAggregateInputType | true;
    _avg?: DonateAvgAggregateInputType;
    _sum?: DonateSumAggregateInputType;
    _min?: DonateMinAggregateInputType;
    _max?: DonateMaxAggregateInputType;
};
export type DonateGroupByOutputType = {
    id: string;
    name: string;
    message: string | null;
    donate: number;
    createAt: Date;
    _count: DonateCountAggregateOutputType | null;
    _avg: DonateAvgAggregateOutputType | null;
    _sum: DonateSumAggregateOutputType | null;
    _min: DonateMinAggregateOutputType | null;
    _max: DonateMaxAggregateOutputType | null;
};
type GetDonateGroupByPayload<T extends DonateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DonateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DonateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DonateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DonateGroupByOutputType[P]>;
}>>;
export type DonateWhereInput = {
    AND?: Prisma.DonateWhereInput | Prisma.DonateWhereInput[];
    OR?: Prisma.DonateWhereInput[];
    NOT?: Prisma.DonateWhereInput | Prisma.DonateWhereInput[];
    id?: Prisma.StringFilter<"Donate"> | string;
    name?: Prisma.StringFilter<"Donate"> | string;
    message?: Prisma.StringNullableFilter<"Donate"> | string | null;
    donate?: Prisma.FloatFilter<"Donate"> | number;
    createAt?: Prisma.DateTimeFilter<"Donate"> | Date | string;
};
export type DonateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    donate?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
};
export type DonateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DonateWhereInput | Prisma.DonateWhereInput[];
    OR?: Prisma.DonateWhereInput[];
    NOT?: Prisma.DonateWhereInput | Prisma.DonateWhereInput[];
    name?: Prisma.StringFilter<"Donate"> | string;
    message?: Prisma.StringNullableFilter<"Donate"> | string | null;
    donate?: Prisma.FloatFilter<"Donate"> | number;
    createAt?: Prisma.DateTimeFilter<"Donate"> | Date | string;
}, "id">;
export type DonateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    donate?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    _count?: Prisma.DonateCountOrderByAggregateInput;
    _avg?: Prisma.DonateAvgOrderByAggregateInput;
    _max?: Prisma.DonateMaxOrderByAggregateInput;
    _min?: Prisma.DonateMinOrderByAggregateInput;
    _sum?: Prisma.DonateSumOrderByAggregateInput;
};
export type DonateScalarWhereWithAggregatesInput = {
    AND?: Prisma.DonateScalarWhereWithAggregatesInput | Prisma.DonateScalarWhereWithAggregatesInput[];
    OR?: Prisma.DonateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DonateScalarWhereWithAggregatesInput | Prisma.DonateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Donate"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Donate"> | string;
    message?: Prisma.StringNullableWithAggregatesFilter<"Donate"> | string | null;
    donate?: Prisma.FloatWithAggregatesFilter<"Donate"> | number;
    createAt?: Prisma.DateTimeWithAggregatesFilter<"Donate"> | Date | string;
};
export type DonateCreateInput = {
    id?: string;
    name: string;
    message?: string | null;
    donate: number;
    createAt?: Date | string;
};
export type DonateUncheckedCreateInput = {
    id?: string;
    name: string;
    message?: string | null;
    donate: number;
    createAt?: Date | string;
};
export type DonateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donate?: Prisma.FloatFieldUpdateOperationsInput | number;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donate?: Prisma.FloatFieldUpdateOperationsInput | number;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonateCreateManyInput = {
    id?: string;
    name: string;
    message?: string | null;
    donate: number;
    createAt?: Date | string;
};
export type DonateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donate?: Prisma.FloatFieldUpdateOperationsInput | number;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donate?: Prisma.FloatFieldUpdateOperationsInput | number;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    donate?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
};
export type DonateAvgOrderByAggregateInput = {
    donate?: Prisma.SortOrder;
};
export type DonateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    donate?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
};
export type DonateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    donate?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
};
export type DonateSumOrderByAggregateInput = {
    donate?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type DonateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    message?: boolean;
    donate?: boolean;
    createAt?: boolean;
}, ExtArgs["result"]["donate"]>;
export type DonateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    message?: boolean;
    donate?: boolean;
    createAt?: boolean;
}, ExtArgs["result"]["donate"]>;
export type DonateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    message?: boolean;
    donate?: boolean;
    createAt?: boolean;
}, ExtArgs["result"]["donate"]>;
export type DonateSelectScalar = {
    id?: boolean;
    name?: boolean;
    message?: boolean;
    donate?: boolean;
    createAt?: boolean;
};
export type DonateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "message" | "donate" | "createAt", ExtArgs["result"]["donate"]>;
export type $DonatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Donate";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        message: string | null;
        donate: number;
        createAt: Date;
    }, ExtArgs["result"]["donate"]>;
    composites: {};
};
export type DonateGetPayload<S extends boolean | null | undefined | DonateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DonatePayload, S>;
export type DonateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DonateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DonateCountAggregateInputType | true;
};
export interface DonateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Donate'];
        meta: {
            name: 'Donate';
        };
    };
    /**
     * Find zero or one Donate that matches the filter.
     * @param {DonateFindUniqueArgs} args - Arguments to find a Donate
     * @example
     * // Get one Donate
     * const donate = await prisma.donate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonateFindUniqueArgs>(args: Prisma.SelectSubset<T, DonateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DonateClient<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Donate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonateFindUniqueOrThrowArgs} args - Arguments to find a Donate
     * @example
     * // Get one Donate
     * const donate = await prisma.donate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DonateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DonateClient<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Donate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonateFindFirstArgs} args - Arguments to find a Donate
     * @example
     * // Get one Donate
     * const donate = await prisma.donate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonateFindFirstArgs>(args?: Prisma.SelectSubset<T, DonateFindFirstArgs<ExtArgs>>): Prisma.Prisma__DonateClient<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Donate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonateFindFirstOrThrowArgs} args - Arguments to find a Donate
     * @example
     * // Get one Donate
     * const donate = await prisma.donate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DonateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DonateClient<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Donates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donates
     * const donates = await prisma.donate.findMany()
     *
     * // Get first 10 Donates
     * const donates = await prisma.donate.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const donateWithIdOnly = await prisma.donate.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DonateFindManyArgs>(args?: Prisma.SelectSubset<T, DonateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Donate.
     * @param {DonateCreateArgs} args - Arguments to create a Donate.
     * @example
     * // Create one Donate
     * const Donate = await prisma.donate.create({
     *   data: {
     *     // ... data to create a Donate
     *   }
     * })
     *
     */
    create<T extends DonateCreateArgs>(args: Prisma.SelectSubset<T, DonateCreateArgs<ExtArgs>>): Prisma.Prisma__DonateClient<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Donates.
     * @param {DonateCreateManyArgs} args - Arguments to create many Donates.
     * @example
     * // Create many Donates
     * const donate = await prisma.donate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DonateCreateManyArgs>(args?: Prisma.SelectSubset<T, DonateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Donates and returns the data saved in the database.
     * @param {DonateCreateManyAndReturnArgs} args - Arguments to create many Donates.
     * @example
     * // Create many Donates
     * const donate = await prisma.donate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Donates and only return the `id`
     * const donateWithIdOnly = await prisma.donate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DonateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DonateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Donate.
     * @param {DonateDeleteArgs} args - Arguments to delete one Donate.
     * @example
     * // Delete one Donate
     * const Donate = await prisma.donate.delete({
     *   where: {
     *     // ... filter to delete one Donate
     *   }
     * })
     *
     */
    delete<T extends DonateDeleteArgs>(args: Prisma.SelectSubset<T, DonateDeleteArgs<ExtArgs>>): Prisma.Prisma__DonateClient<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Donate.
     * @param {DonateUpdateArgs} args - Arguments to update one Donate.
     * @example
     * // Update one Donate
     * const donate = await prisma.donate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DonateUpdateArgs>(args: Prisma.SelectSubset<T, DonateUpdateArgs<ExtArgs>>): Prisma.Prisma__DonateClient<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Donates.
     * @param {DonateDeleteManyArgs} args - Arguments to filter Donates to delete.
     * @example
     * // Delete a few Donates
     * const { count } = await prisma.donate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DonateDeleteManyArgs>(args?: Prisma.SelectSubset<T, DonateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Donates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donates
     * const donate = await prisma.donate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DonateUpdateManyArgs>(args: Prisma.SelectSubset<T, DonateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Donates and returns the data updated in the database.
     * @param {DonateUpdateManyAndReturnArgs} args - Arguments to update many Donates.
     * @example
     * // Update many Donates
     * const donate = await prisma.donate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Donates and only return the `id`
     * const donateWithIdOnly = await prisma.donate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends DonateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DonateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Donate.
     * @param {DonateUpsertArgs} args - Arguments to update or create a Donate.
     * @example
     * // Update or create a Donate
     * const donate = await prisma.donate.upsert({
     *   create: {
     *     // ... data to create a Donate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donate we want to update
     *   }
     * })
     */
    upsert<T extends DonateUpsertArgs>(args: Prisma.SelectSubset<T, DonateUpsertArgs<ExtArgs>>): Prisma.Prisma__DonateClient<runtime.Types.Result.GetResult<Prisma.$DonatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Donates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonateCountArgs} args - Arguments to filter Donates to count.
     * @example
     * // Count the number of Donates
     * const count = await prisma.donate.count({
     *   where: {
     *     // ... the filter for the Donates we want to count
     *   }
     * })
    **/
    count<T extends DonateCountArgs>(args?: Prisma.Subset<T, DonateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DonateCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Donate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonateAggregateArgs>(args: Prisma.Subset<T, DonateAggregateArgs>): Prisma.PrismaPromise<GetDonateAggregateType<T>>;
    /**
     * Group by Donate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends DonateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DonateGroupByArgs['orderBy'];
    } : {
        orderBy?: DonateGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DonateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Donate model
     */
    readonly fields: DonateFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Donate.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DonateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Donate model
 */
export interface DonateFieldRefs {
    readonly id: Prisma.FieldRef<"Donate", 'String'>;
    readonly name: Prisma.FieldRef<"Donate", 'String'>;
    readonly message: Prisma.FieldRef<"Donate", 'String'>;
    readonly donate: Prisma.FieldRef<"Donate", 'Float'>;
    readonly createAt: Prisma.FieldRef<"Donate", 'DateTime'>;
}
/**
 * Donate findUnique
 */
export type DonateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * Filter, which Donate to fetch.
     */
    where: Prisma.DonateWhereUniqueInput;
};
/**
 * Donate findUniqueOrThrow
 */
export type DonateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * Filter, which Donate to fetch.
     */
    where: Prisma.DonateWhereUniqueInput;
};
/**
 * Donate findFirst
 */
export type DonateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * Filter, which Donate to fetch.
     */
    where?: Prisma.DonateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Donates to fetch.
     */
    orderBy?: Prisma.DonateOrderByWithRelationInput | Prisma.DonateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Donates.
     */
    cursor?: Prisma.DonateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Donates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Donates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Donates.
     */
    distinct?: Prisma.DonateScalarFieldEnum | Prisma.DonateScalarFieldEnum[];
};
/**
 * Donate findFirstOrThrow
 */
export type DonateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * Filter, which Donate to fetch.
     */
    where?: Prisma.DonateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Donates to fetch.
     */
    orderBy?: Prisma.DonateOrderByWithRelationInput | Prisma.DonateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Donates.
     */
    cursor?: Prisma.DonateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Donates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Donates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Donates.
     */
    distinct?: Prisma.DonateScalarFieldEnum | Prisma.DonateScalarFieldEnum[];
};
/**
 * Donate findMany
 */
export type DonateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * Filter, which Donates to fetch.
     */
    where?: Prisma.DonateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Donates to fetch.
     */
    orderBy?: Prisma.DonateOrderByWithRelationInput | Prisma.DonateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Donates.
     */
    cursor?: Prisma.DonateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Donates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Donates.
     */
    skip?: number;
    distinct?: Prisma.DonateScalarFieldEnum | Prisma.DonateScalarFieldEnum[];
};
/**
 * Donate create
 */
export type DonateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * The data needed to create a Donate.
     */
    data: Prisma.XOR<Prisma.DonateCreateInput, Prisma.DonateUncheckedCreateInput>;
};
/**
 * Donate createMany
 */
export type DonateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donates.
     */
    data: Prisma.DonateCreateManyInput | Prisma.DonateCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Donate createManyAndReturn
 */
export type DonateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * The data used to create many Donates.
     */
    data: Prisma.DonateCreateManyInput | Prisma.DonateCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Donate update
 */
export type DonateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * The data needed to update a Donate.
     */
    data: Prisma.XOR<Prisma.DonateUpdateInput, Prisma.DonateUncheckedUpdateInput>;
    /**
     * Choose, which Donate to update.
     */
    where: Prisma.DonateWhereUniqueInput;
};
/**
 * Donate updateMany
 */
export type DonateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Donates.
     */
    data: Prisma.XOR<Prisma.DonateUpdateManyMutationInput, Prisma.DonateUncheckedUpdateManyInput>;
    /**
     * Filter which Donates to update
     */
    where?: Prisma.DonateWhereInput;
    /**
     * Limit how many Donates to update.
     */
    limit?: number;
};
/**
 * Donate updateManyAndReturn
 */
export type DonateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * The data used to update Donates.
     */
    data: Prisma.XOR<Prisma.DonateUpdateManyMutationInput, Prisma.DonateUncheckedUpdateManyInput>;
    /**
     * Filter which Donates to update
     */
    where?: Prisma.DonateWhereInput;
    /**
     * Limit how many Donates to update.
     */
    limit?: number;
};
/**
 * Donate upsert
 */
export type DonateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * The filter to search for the Donate to update in case it exists.
     */
    where: Prisma.DonateWhereUniqueInput;
    /**
     * In case the Donate found by the `where` argument doesn't exist, create a new Donate with this data.
     */
    create: Prisma.XOR<Prisma.DonateCreateInput, Prisma.DonateUncheckedCreateInput>;
    /**
     * In case the Donate was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DonateUpdateInput, Prisma.DonateUncheckedUpdateInput>;
};
/**
 * Donate delete
 */
export type DonateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
    /**
     * Filter which Donate to delete.
     */
    where: Prisma.DonateWhereUniqueInput;
};
/**
 * Donate deleteMany
 */
export type DonateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Donates to delete
     */
    where?: Prisma.DonateWhereInput;
    /**
     * Limit how many Donates to delete.
     */
    limit?: number;
};
/**
 * Donate without action
 */
export type DonateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donate
     */
    select?: Prisma.DonateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Donate
     */
    omit?: Prisma.DonateOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Donate.d.ts.map