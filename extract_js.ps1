$html = [System.IO.File]::ReadAllText('index.html')
# Find the inline script (not src scripts)
$pattern = '(?s)<script(?![^>]*src)[^>]*>(.*?)</script>'
$match = [regex]::Match($html, $pattern)
if ($match.Success) {
    $js = $match.Groups[1].Value
    [System.IO.File]::WriteAllText('extracted.js', $js)
    $lines = $js.Split("`n")
    Write-Host "JS lines: $($lines.Length)"
    $openP = $js.Split('(').Length - 1
    $closeP = $js.Split(')').Length - 1
    $openB = $js.Split('{').Length - 1
    $closeB = $js.Split('}').Length - 1
    $bt = $js.Split('`').Length - 1
    Write-Host "Parens: open=$openP close=$closeP diff=$($openP-$closeP)"
    Write-Host "Braces: open=$openB close=$closeB diff=$($openB-$closeB)"
    Write-Host "Backticks: $bt (should be even)"
} else {
    Write-Host "No inline script found"
}
