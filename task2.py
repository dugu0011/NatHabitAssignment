def allInterleavings(s1, s2):
    def interLeavings(s1, s2, current, result):
        if not s1 and not s2:
            result.append(current)
            return
        if s1:
            interLeavings(s1[1:], s2, current + s1[0], result)
        if s2:
            interLeavings(s1, s2[1:], current + s2[0], result)

    result = []
    interLeavings(s1, s2, "", result)
    return result

# for example inputs 
s1 = "ABC"
s2 = "ACB"
interleavings = allInterleavings(s1, s2)

for i, interleaving in enumerate(interleavings, start=1):
    print(f"{i}. {interleaving}")