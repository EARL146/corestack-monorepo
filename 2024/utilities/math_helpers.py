"""
Statistical Analysis & Computation Helper
"""
import math

def calculate_mean(values):
    return sum(values) / len(values) if values else 0.0

def calculate_variance(values):
    if len(values) < 2:
        return 0.0
    m = calculate_mean(values)
    return sum((x - m) ** 2 for x in values) / (len(values) - 1)

def calculate_stdev(values):
    return math.sqrt(calculate_variance(values))
