export function sendResult(result) {
  return {
    type: 'RESULT',
    payload: result
  };
}
