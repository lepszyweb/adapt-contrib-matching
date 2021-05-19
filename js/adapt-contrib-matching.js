define([
  'core/js/adapt',
  './matchingView',
  './matchingModel'
], (Adapt, MatchingView, MatchingModel) => Adapt.register('matching', {
  view: MatchingView,
  model: MatchingModel
}));
