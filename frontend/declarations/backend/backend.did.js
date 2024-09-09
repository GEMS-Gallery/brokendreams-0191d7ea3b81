export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'brokenFunction' : IDL.Func([], [IDL.Text], []),
    'mismatchedTypes' : IDL.Func([IDL.Text], [IDL.Nat], []),
    'nonExistentFunction' : IDL.Func([], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
