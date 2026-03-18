$content = [System.IO.File]::ReadAllText('index.html')
$lines = $content -split "`n"
Write-Host "Total lines: $($lines.Length)"
Write-Host "`n--- Lines 6010-6030 ---"
for ($i = 6009; $i -lt [Math]::Min(6030, $lines.Length); $i++) {
    Write-Host "$($i+1): $($lines[$i])"
}
Write-Host "`n--- Lines 6750-6760 ---"
for ($i = 6749; $i -lt [Math]::Min(6760, $lines.Length); $i++) {
    Write-Host "$($i+1): $($lines[$i])"
}
Write-Host "`n--- Lines 3325-3335 (script start) ---"
for ($i = 3324; $i -lt [Math]::Min(3335, $lines.Length); $i++) {
    Write-Host "$($i+1): $($lines[$i])"
}
