import { SelectContent, SelectItem, SelectTrigger, SelectValue, Select as ShadcnSelect } from "@pingtou/shadcn-ui";

export const Select = () => {
  return (
    <ShadcnSelect>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
      </SelectContent>
    </ShadcnSelect>
  );
};
