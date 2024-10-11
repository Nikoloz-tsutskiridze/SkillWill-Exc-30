import { renderHook, act } from "@testing-library/react";
import useClickCounter from "./useClickCounter";

test("should initialize counter to 0 and increment", () => {
  const { result } = renderHook(() => useClickCounter());

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
