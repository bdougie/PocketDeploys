import {fromJS} from "immutable";
export const getDeploy = (state, { deployId }) => {
  console.log(fromJS(state.entities).toObject())
  if (state.entities.deploysById) {
    return state.entities.deploysById[deploydId];
  } else {
    return null;
  }
};
