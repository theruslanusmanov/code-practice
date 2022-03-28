function decompose(n) { // Greedy DFS
    return (function _decompose(nn, sol, maxChoice) {
        if (nn === 0) return sol
        let solution;
        for (let choice = maxChoice; choice > 0; choice--) {
            if (nn - choice * choice < 0) continue;
            solution = _decompose(nn - choice * choice, [choice, ...sol], choice - 1)
            if (solution != null) return solution
        }
        return null
    })(n * n, [], n - 1)
}