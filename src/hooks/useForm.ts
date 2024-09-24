import { ChangeEvent, useCallback, useState } from 'react';

type TValues = {
  [key: string]: string | number | boolean | any;
};

type ReturnType = [
  TValues,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
];

export const useForm: (initialValue: TValues) => ReturnType = (
  initailValue: TValues
): ReturnType => {
  const [form, setForm] = useState(initailValue);

  const onChange: (e: ChangeEvent<HTMLInputElement>) => void = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      setForm((form: TValues) => ({ ...form, [name]: value }));
    },
    []
  );

  const reset: () => void = useCallback(
    (): void => setForm(initailValue),
    [initailValue]
  );
  return [form, onChange, reset];
};
