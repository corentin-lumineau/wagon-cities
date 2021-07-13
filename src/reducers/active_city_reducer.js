export default function(state = null, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_ACTIVE':
      return action.payload;
    default:
      return state;
  }
}
