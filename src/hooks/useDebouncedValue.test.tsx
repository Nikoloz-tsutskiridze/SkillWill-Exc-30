import { renderHook, act } from "@testing-library/react";
import useDebouncedValue from "./useDebouncedValue";

test("should return debounced value after delay", () => {
  jest.useFakeTimers();

  const { result, rerender } = renderHook(
    ({ value, delay }) => useDebouncedValue(value, delay),
    {
      initialProps: { value: "Hello", delay: 500 },
    }
  );

  expect(result.current).toBe("Hello");

  // Update value
  rerender({ value: "Hello World", delay: 500 });

  // Debounced value should still be old value
  expect(result.current).toBe("Hello");

  // Fast forward time
  act(() => {
    jest.advanceTimersByTime(500);
  });

  // Now the debounced value should be updated
  expect(result.current).toBe("Hello World");
});
