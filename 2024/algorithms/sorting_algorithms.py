"""
Sorting Algorithms Benchmark Suite - 2024
Author: Early Pajo (EARL146)
"""
import time
import random

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return _merge(left, right)

def _merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

if __name__ == "__main__":
    dataset = [random.randint(1, 10000) for _ in range(5000)]
    start = time.perf_counter()
    sorted_qs = quick_sort(dataset)
    elapsed_qs = (time.perf_counter() - start) * 1000
    print(f"QuickSort 5000 elements: {elapsed_qs:.2f}ms")
