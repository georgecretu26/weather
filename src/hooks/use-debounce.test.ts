import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useDebounce } from "@/hooks";

describe("useDebounce", () => {
  jest.useFakeTimers();

  it("should return the initial value", () => {
    const { result } = renderHook(() => useDebounce("hello", 500));

    expect(result.current).toBe("hello");
  });

  it("should not update debouncedValue before the delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "hello", delay: 500 },
      }
    );

    rerender({ value: "world", delay: 500 });

    act(() => {
      jest.advanceTimersByTime(250);
    });

    expect(result.current).toBe("hello");
  });

  it("should update debouncedValue after the delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "hello", delay: 500 },
      }
    );

    rerender({ value: "world", delay: 500 });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("world");
  });

  it("should cancel the debounce on unmount", () => {
    const { result, unmount } = renderHook(() => useDebounce("hello", 500));

    unmount();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("hello");
  });

  // Cleanup to avoid interfering with other tests
  afterAll(() => {
    jest.useRealTimers();
  });
});
