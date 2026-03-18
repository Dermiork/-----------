$c = [System.IO.File]::ReadAllText('index.html')
$openParen = $c.Split('(').Length - 1
$closeParen = $c.Split(')').Length - 1
$openBracket = $c.Split('[').Length - 1
$closeBracket = $c.Split(']').Length - 1
$backtick = $c.Split('`').Length - 1
Write-Host "Open parens: $openParen, Close parens: $closeParen, Diff: $($openParen - $closeParen)"
Write-Host "Open brackets: $openBracket, Close brackets: $closeBracket, Diff: $($openBracket - $closeBracket)"
Write-Host "Backticks (should be even): $backtick"
