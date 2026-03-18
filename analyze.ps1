$content = [System.IO.File]::ReadAllText('index.html')
$lines = $content -split "`n"
Write-Host "Total lines: $($lines.Length)"

for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    if ($line -match '<style') { Write-Host "Style starts at line: $($i+1)" }
    if ($line -match '</style') { Write-Host "Style ends at line: $($i+1)" }
    if ($line -match '<script' -and $line -notmatch 'src=') { Write-Host "Inline script starts at line: $($i+1)" }
    if ($line -match '</script') { Write-Host "Script ends at line: $($i+1)" }
}

# Show lines around the wrap CSS
Write-Host "`n--- Lines around .wrap CSS (lines 60-80) ---"
for ($i = 59; $i -lt [Math]::Min(80, $lines.Length); $i++) {
    Write-Host "$($i+1): $($lines[$i])"
}
