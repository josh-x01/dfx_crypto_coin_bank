export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'checkBalance' : IDL.Func([], [IDL.Nat], ['query']) });
};
export const init = ({ IDL }) => { return []; };
